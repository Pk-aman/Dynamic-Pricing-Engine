import Rules from "../models/rules.model";
import { MarketDataDto } from "../utils/types/marketData";
import { DynamicPriceResponseDto } from "../utils/types/pricing";
import {
  CreateProductStaus,
  ProductByIdRequestDto,
  ProjectDto,
} from "../utils/types/product";
import { marketDataService } from "./marketData";
import { priceHistoryService } from "./priceHistory.service";
import { productService } from "./product";

class PricingService {
  async calculateDynamicPrice(
    id: string
  ): Promise<DynamicPriceResponseDto> {
    const productData = await productService.getById(id);
    if (!productData) {
      throw new Error("Product not found");
    }
    const marketData = await marketDataService.getMarketDataByProductId(id);
    if (!marketData) {
      throw new Error("Market data not found");
    }
    const rules = await Rules.find({
      $or: [{ productId: null }, { id }],
    }).sort({ priority: 1 });

    const basePrice = productData.product ? productData.product.basePrice : 0;
    const appliedRules: string[] = [];
    let newPrice = 0;
    // 4️⃣ Apply rules
    for (const rule of rules) {
      const conditionMet = this.evaluateCondition(
        rule.condition,
        productData.product,
        marketData.marketData,
        basePrice
      );

      if (conditionMet) {
        newPrice = this.applyAction(basePrice, rule.action);
        appliedRules.push(`${rule.condition} → ${rule.action}`);
      }
    }

    // 5️⃣ Save price history (internal)
    await priceHistoryService.create({
      productId: id,
      basePrice: basePrice,
      calculatedPrice: newPrice,
      appliedRules,
    });

    // 6️⃣ Return response
    return {
      status: CreateProductStaus.SUCESS,
      price: {
        productId: id,
        basePrice: basePrice,
        dynamicPrice: newPrice,
        appliedRules,
      },
    };
  }

  // --- Helpers ---

  private evaluateCondition(
    condition: string,
    product: ProjectDto,
    marketData: MarketDataDto,
    currentPrice: number
  ): boolean {
    const context = {
      stock: marketData.stock,
      demandScore: marketData.demandScore,
      competitorAvg:
        marketData.competitorPrices.length > 0
          ? marketData.competitorPrices.reduce((a: any, b: any) => a + b, 0) /
            marketData.competitorPrices.length
          : 0,
      basePrice: product.basePrice,
      price: currentPrice,
      hour: new Date().getHours(),
    };

    // ⚠️ simple safe evaluation (MVP)
    return Function(
      ...Object.keys(context),
      `return ${condition};`
    )(...Object.values(context));
  }

  private applyAction(price: number, action: string): number {
    const percentage = parseFloat(action.replace("%", ""));
    return action.startsWith("+")
      ? price + (price * percentage) / 100
      : price - (price * percentage) / 100;
  }
}

export const pricingService = new PricingService();

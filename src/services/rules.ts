import {
  MarketDataResponseDto,
  UpdateMarketRequestDto,
} from "../utils/types/marketData";
import MarketData from "../models/marketData.model";
import { ProductByIdRequestDto } from "../utils/types/product";
import {
  CreateRulesRequestDto,
  CreateRulesResponseDto,
  RulesListResponseDto,
  RulesResponseDto,
  RulesStaus,
  UpdateRulesRequestDto,
} from "../utils/types/rules";
import Rules from "../models/rules.model";
class RulesService {
  async create(req: CreateRulesRequestDto): Promise<CreateRulesResponseDto> {
    const releResponse = await Rules.create({
      productId: req.productId,
      condition: req.condition,
      action: req.action,
      priority: req.priority,
    });

    return {
      status: RulesStaus.SUCESS,
      id: releResponse._id,
    };
  }

  async getRuleById(req: ProductByIdRequestDto): Promise<RulesResponseDto> {
    const ruleResponse = await Rules.findOne({ productId: req.id });

    return {
      status: RulesStaus.SUCESS,
      rule: ruleResponse,
    };
  }

  async getAllRules(): Promise<RulesListResponseDto> {
    const ruleResponse = await Rules.find();

    return {
      status: RulesStaus.SUCESS,
      rules: ruleResponse,
    };
  }

  async updateRuleByProductId(
    params: ProductByIdRequestDto,
    body: UpdateRulesRequestDto
  ): Promise<RulesResponseDto> {
    const releResponse = await MarketData.findOneAndUpdate(
      {
        productId: params.id,
      },
      body,
      { new: true }
    );

    return {
      status: RulesStaus.SUCESS,
      rule: releResponse,
    };
  }

  async deleteRuleByProductId(
    req: ProductByIdRequestDto
  ): Promise<RulesResponseDto> {
    const ruleResponse = await Rules.findOneAndDelete({ productId: req.id });

    return {
      status: RulesStaus.SUCESS,
      rule: ruleResponse,
    };
  }
}

export const rulesService = new RulesService();

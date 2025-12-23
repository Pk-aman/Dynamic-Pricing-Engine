import { Request, Response } from "express";
import {
  CreateRulesRequestDto,
  CreateRulesResponseDto,
  RuleResponseError,
  RulesResponseDto,
  RulesStaus,
} from "../utils/types/rules";
import { rulesService } from "../services/rules";
import { ProductByIdRequestDto } from "../utils/types/product";

export const ruleController = {
  async createRule(
    req: Request<CreateRulesRequestDto>,
    res: Response<CreateRulesResponseDto | RuleResponseError>
  ) {
    try {
      const body = req.body;
      const ruleResponse = await rulesService.create(body);
      if (ruleResponse) {
        res.json({
          status: RulesStaus.SUCESS,
          id: ruleResponse.id,
        });
      }
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong.",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async getRuleByProductId(
    req: Request<ProductByIdRequestDto>,
    res: Response<RulesResponseDto | RuleResponseError>
  ) {
    try {
      console.log("controller");
      const param = req.params;
      const ruleResponse = await rulesService.getRuleById(param);
      if (ruleResponse) {
        res.json(ruleResponse);
      }
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async getAllRules(
    req: Request,
    res: Response<RulesResponseDto | RuleResponseError>
  ) {
    try {
      const rulesResponse = await rulesService.getAllRules();
      if (rulesResponse) {
        res.json(rulesResponse);
      }
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },

  async deleteRuleByProductId(
    req: Request<ProductByIdRequestDto>,
    res: Response<RulesResponseDto | RuleResponseError>
  ) {
    try {
      const param = req.params;
      const ruleResponse = await rulesService.deleteRuleByProductId(param);
      if (ruleResponse) {
        res.json(ruleResponse);
      }
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    } catch (error) {
      console.error("Error: ", error);
      res.json({
        status: RulesStaus.FAILED,
        message: "Something went wrong",
      });
    }
  },
};

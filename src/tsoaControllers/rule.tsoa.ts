import { Body, Controller, Delete, Get, Path, Post, Route, Tags } from "tsoa";
import { rulesService } from "../services/rules";
import {
  CreateRulesRequestDto,
  CreateRulesResponseDto,
  RuleResponseError,
  RulesResponseDto,
  RulesStaus,
} from "../utils/types/rules";
import { promises } from "node:dns";
@Route("rule")
@Tags("Rule")
export class RuleTsoa extends Controller {
  @Post()
  public async createRule(
    @Body() body: CreateRulesRequestDto
  ): Promise<CreateRulesResponseDto | RuleResponseError> {
    return {} as CreateRulesResponseDto | RuleResponseError;
  }
  @Get("{id}")
  public async getRuleByProductId(
    @Path() id: string
  ): Promise<RulesResponseDto | RuleResponseError> {
    return {} as RulesResponseDto | RuleResponseError;
  }
  @Get()
  public async getAllRules(): Promise<RulesResponseDto | RuleResponseError> {
    return {} as RulesResponseDto | RuleResponseError;
  }
  @Delete("{id}")
  public async deleteRuleByProductId(
    @Path() id: string
  ): Promise<RulesResponseDto | RuleResponseError> {
    return {} as RulesResponseDto | RuleResponseError;
  }
}

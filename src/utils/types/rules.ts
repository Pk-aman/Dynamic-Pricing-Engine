export type CreateRulesRequestDto = {
  productId: string;
  condition: string;
  action: string;
  priority: number;
};

export type CreateRulesResponseDto = {
  status: string;
  id: string | null;
};

export enum RulesStaus {
  SUCESS = "Sucess",
  FAILED = "failed",
}

export type RulesDto = {
  id: string;
  productId: string;
  condition: string;
  action: string;
  priority: number;
};

export type RulesResponseDto = {
  status: RulesStaus;
  rules: Array<RulesDto>;
};

export type UpdateRulesRequestDto = {
  condition?: string;
  action?: string;
  priority?: number;
};

export type RuleResponseError = {
  status: RulesStaus;
  message: string;
};

export interface IUserTree {
  uuid: string;
  currentStep: string;
  lifeTime: number;
  commitCount: number;
  tree: ITree | any;
}

export interface ITree {
  uuid: string;
  seed?: IStep;
  sprout?: IStep;
  baby?: IStep;
  adult?: IStep;
  special?: IStep;
}

export interface IStep {
  good: Array<string>;
  bad: Array<string>;
  name: INation;
}

export interface INation {
  kr: string;
}

export interface IGrowthStep {
  sprout: number;
  baby: number;
  adult: number;
  special: number;
}

export interface ISeason {
  id: number;
  growthStep: IGrowthStep;
  name: INation;
  startDate: Date;
  endDate: Date;
}

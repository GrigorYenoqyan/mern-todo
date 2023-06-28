export enum Features {
  GRPAHQL_ENABLED = 'GRPAHQL_ENABLED',
}

export type Feature = keyof typeof Features;

export type FeaturesList = {
  [key in Feature]: boolean;
};

const features: FeaturesList = {
  [Features.GRPAHQL_ENABLED]: true,
};

export default features;

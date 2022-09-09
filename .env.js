const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
};

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: "9000",
  Meta_WA_accessToken:
  process.env.Meta_WA_accessToken,
    
  Meta_WA_SenderPhoneNumberId: "101308709381417",
  Meta_WA_wabaId: "109318455233299",
  Meta_WA_VerifyToken: "9638051000",
};

const fallback = {
  ...process.env,
  NODE_ENV: undefined,
};

module.exports = (environment) => {
  console.log(`Execution environment selected is: "${environment}"`);
  if (environment === "production") {
    return production;
  } else if (environment === "development") {
    return development;
  } else {
    return fallback;
  }
};

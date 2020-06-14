export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-2",
      BUCKET: "eds-notes-app-uploads"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://bo7b9kmeq9.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_gh576OWu9",
      APP_CLIENT_ID: "150tvni0u9oal9j9nr5jm2o92k",
      IDENTITY_POOL_ID: "eu-west-2:145e2e9b-4259-44e7-b9be-5f6a96a2d929"
    }
  };
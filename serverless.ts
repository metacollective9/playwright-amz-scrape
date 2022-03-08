import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'playwright-amz-scrape',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    playWrightTest: {
      handler: 'handler.playWrightTest',
      timeout: 900,
      events: [
        {
          http: {
            method: 'get',
            path: 'playWrightTest'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;

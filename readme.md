# playwright-amz-scrape

This is a lambda function written using serverless framework (https://www.serverless.com/). This function will do the following -

* Title
* Description
* Price
* Author Name
* Rating count
* Image URL
* Product details (Publisher, Language, Hardcover, ISBN-10, ISBN-13, Rating age & Dimensions)
* Ranking in various categories
* A full-length screenshot of the product page


This repo uses these packages - 
* playwright-core: A light version of the playwright. It does not contain any  browser-related packages. 
* playwright-aws-lambda: Support for Playwright running on AWS Lambda and Google Cloud Functions. NOTE: Currently only Chromium is supported.
* aws-sdk: AWS SDK for JavaScript
* serverless-offline: This Serverless plugin emulates AWS λ and API Gateway on your local machine to speed up your development cycles


# Install

```javascript
   npm install 
```

# Run
Make sure that you have AWS access and secret key with correct permission set in the environment before you run this. You will also need a bucket in your AWS account and that bucket name should be added in environment variable named - ```PLAYWRIGHT_SCREENSHOT_BUCKET``` in serverless.yml
```javascript
   sls offline
```
Once its running, you can test this function locally from here - ```http://localhost:3000/local/playWrightTest?url=[url-of-a-webpage-you-want-to-scrape]```
# deploy

Make sure that you have AWS access and secret key with correct permission set in the environment before you run this.

```javascript
   sls deploy --stage [dev][prod] --region[any-aws-region-of-you-choice] 
```



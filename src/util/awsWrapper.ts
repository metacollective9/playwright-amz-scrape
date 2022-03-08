import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function uploadToS3(s3Data: S3.PutObjectRequest) {
    console.info(
      "---- UPLODAING TO S3",
      JSON.stringify(`${s3Data.Bucket} ${s3Data.Key}`, null, 2)
    );
  
    try {
      return await s3.upload(s3Data).promise();
    } catch (error) {
      console.log(error);
      return error;
    }
}


export async function getS3SignedUrl(params: any): Promise<any> {
    console.info(
      "---- GETTING SIGNED URL FROM S3",
      JSON.stringify(params, null, 2)
    );
    try {
      return s3.getSignedUrl("getObject", {
        Bucket: params.Bucket,
        Key: params.Key,
        Expires: params.Expires,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
}
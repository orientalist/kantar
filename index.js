const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    let SVID = event.queryStringParameters.svid;
    let HASH = event.queryStringParameters.hash;

    let survey_json = await decryptor(HASH, SVID);
    survey_json = JSON.parse(survey_json);

    let all_label = survey_json.result.map(j => j.answerLabel);
    console.log(all_label);

    let isComplete = all_label.every(l => !l.includes('saso'));

    let redirect_url = "";

    if (isComplete) {
        redirect_url = `https://abc.com?ProjectToken=d17ff6de-8c2d-4924-b45a-ee7ec338792c`;
    } else {
        redirect_url = `https://abc.com?ProjectToken=04ce9006-f91d-7a96-bb87-bcc65da45eeb`;
    }

    const response = {
        statusCode: 301,
        headers: {
            Location: redirect_url
        }
    };
    return response;
};

const decryptor = async function (hash, svid) {
    let SURVEYCAKE_DOMAIN = "";
    let VERSION = "v0";


    let hash_key = "521f033084423bae";
    let iv_key = "40e1e17499a43107";

    let resp = await axios.get(`https://${SURVEYCAKE_DOMAIN}/webhook/${VERSION}/${svid}/${hash}`);

    let data = resp.data;

    const decipher = crypto.createDecipheriv(
        'AES-128-CBC',
        hash_key,
        iv_key
    );

    let json = decipher.update(
        data,
        'base64',
        'utf8'
    );

    json += decipher.final('utf8');

    return json;
};
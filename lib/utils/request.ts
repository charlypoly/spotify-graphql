import * as request from 'request';
export function apiRequest(spotifyApiClient: any): Function {
    return (url: string, params?: {[k: string]: any}, formatter?: Function): Promise<any> => {
        const options: request.UrlOptions & request.CoreOptions = {
            url: url,
            qs: params || {},
            headers: {
                Authorization: `Bearer ${spotifyApiClient._credentials.accessToken}`,
            }
        };
        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const json: any = JSON.parse(body);
                    resolve(!!formatter ? formatter(json) : json);
                } else {
                    try {
                        const json: any = JSON.parse(body);
                        if (json.error) {
                            reject(json.error);
                        } else {
                            reject(error);
                        }
                    } catch (e) {
                       reject(error);
                    }
                }
            });
        });
    };
}

import * as fs from 'fs';
import * as path from 'path';
export function loadFixture(name: string): Promise<{}> {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__filename, `../fixtures/${name}.json`), (err, data) => {
            if (err) {
                console.error("------------------------------------------------------")
                console.error(err)
                reject(err);
                console.error("------------------------------------------------------")
            } else {
                try {
                    resolve(JSON.parse(data.toString()));
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
}

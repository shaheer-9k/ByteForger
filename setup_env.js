const fs = require('fs');

const spreadsheetId = '1ZoahRsNDDdDNqYTFjF7gwU6EuLJZXEAZ3e2YN-IUu8I';
const clientEmail = 'byteforger@byteforger.iam.gserviceaccount.com';
const privateKey = '-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDD0nSjO9m6NTj5\\nESOjZTqyOqrG/JzwZeZy5HPLT94DAv4TZcSxMxLCKMLMRP2YJP7OoM0WbhZaLZBk\\nwnCzA4mYjVcQT5+vmXT5UvJyjYQ6yqFWbvzkEPWV1urWYdngWTs7s3SHCQLO7R7N\\nMqgUpjC41+kWI5Dq+NC9FYnVE0zU39QP5P9J11gl2DeKpYeHabmQrukwWykfyyKd\\nqXkPaMJnwSVf8jvaAgHjCszCwm3k8mGUjKBQjMufSxtaiJZpbnnBzQx6+3hC0LTz\\nBmWEqrE9xyROIrg2onSoohK3BFaIutb4TRZNH0/7PGR+1MMHcFvM3BxR3W33PqtG\\nESUFNrdFAgMBAAECggEAAtW3YAyUApTWKg7kNe+XebCNO9u41ucWvreNcJZLp74B\\nmRzKS+lqHlryNPxTsoHomWutBGPcGXqa4kaJVKIauhVjuwX4ERX24kwf2+YuEZ7Q\\n1pw9N30CXSSzGh7pBU0tZRgcOf84pe+7WCuhUMk2H9rqUip6JNisxuv6ppXEsTk0\\nw3cI0cnUWFaBLgEhLDIBEXMJsRnbEdsx9X0WleL79gPIr/75m+W16cPRdghXwuF0\\nEvdDfOG8S1rSh7VZ2LLi6kJsBQkWdYhyxbp0pOJw3meXm57uChGoOXvM8O+vN5rZ\\nLyWhoGIGfZQz2AMilfBUqem7y5Whz0Ybx5StaNT72QKBgQD9pqUbu8lkOGaAThBU\\n5WyplHubXFrlNZJYxQNZDBBsYu4lxK+1RUVHK2vmxb/fVrHjavywDNmFw1niLpfZ\\nf0gCliy6IWwLGiB9ye200zPR1ZA/8yRELbWaCjeX5O/LnjWzgvzzR/fFckdowNaO\\n2ahdoKB4t4vYkqNyKizDOZubmQKBgQDForXLc/nQiOf2pNsJIFsG0tIPZIyHuDtm\\n1kZzZZyCRWHRdSuP22ngKaDccxzruJ/jtQpAOrxVAz0CQNEV8dhRwoEmCr3FXEAn\\ndnnLptnDlsU5KLppyB0BtLzMPrhJihsnGikj5KqlBHyGlBuWtr3qATkWQvszENi6\\nxy1w1fSkjQKBgQCneki6LxuiWLsVLHYMGA/PSIL06d36SYz/n9W+DgEqD4g+18dM\\nYRiFDV6JWTh/Nrbt+c4uT82wTHQkq68HpMrfKlkN7NNx4SZi59lT87/bZK+CCgCA\\nI84sj2J1oGvUffnnNS3fVD182R/dQrZoS76nU0+hZU+pB+lzj/VOUdM0wQKBgQCe\\nA19yUUGUt0Eu89OkUlg09m24nN22zVfA+uTM8prVlP+GZjX0CKt37BCO8QJYfP5p\\nIqAVhmB5X+NxX71L3Fbl16tGbSQZHY61foYWi0pklLEO6D9SwAphCM5CRos1UNQw\\nyTvHVNYSpamiN9xu/aCN7XhlEhyhUYDWpNTx+D5nKQKBgEAs6mYEU3HVKYDr692g\\nEUbtuXFePVnbGTZoG76bdySgG0n/Rug9+MMVVV3sSVKX0y3JN7xvKDBD5gRwGDrw\\nqgMp9kjqliVGFgmVDxPlUHfrbVJdy5+AGCDU1lV81f8e5Jk1l4T/1UaZSgauCwbW\\ns/+6BzSg48TVDV0Ki150Mt1F\\n-----END PRIVATE KEY-----\\n';

const content = `# Google Sheets Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=\${spreadsheetId}
GOOGLE_CLIENT_EMAIL=\${clientEmail}
GOOGLE_PRIVATE_KEY="\${privateKey}"
`;

fs.writeFileSync('.env', content);
console.log('Successfully updated .env file');

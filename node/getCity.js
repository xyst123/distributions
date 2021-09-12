const axios = require('axios');
const fs = require('fs');

axios
  .get(
    'https://www.starbucks.com.cn/api/stores/nearby?lat=30.287459&lon=120.153576&limit=1000&locale=ZH&features=&radius=1000000'
  )
  .then((data) => {
    fs.writeFileSync(
      './hangzhou.js',
      JSON.stringify(
        data.data.data.filter((item) => {
          return item.address.city === '杭州市';
        })
      )
    );
  });

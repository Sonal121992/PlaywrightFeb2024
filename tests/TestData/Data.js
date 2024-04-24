const base = require('@playwright/test')

exports.customTest = base.test.extend(
    {
        testdataforContactUs:{
            firstName : "Sonal1",
            lastName : "Khante1",
            email : "sonalkhante1@gmail.com",
            msg : 'I am learning Playwright with import export customTest'
        }
    }
)
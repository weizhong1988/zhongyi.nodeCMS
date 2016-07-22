/**
 * Created by duzhong on 16/7/22.
 */
var siteConfig = require('./zy_Common');

var adminFunc = {

    siteInfos: function (description) {
        return {
            title: siteConfig.SITENAME,
            desc: description,
            author: siteConfig.AUTHORNAME
        }
    },
    setPageInfo: function (req, res, module) {
        return {
            siteInfo: this.siteInfos(module),
            layout: "manager/public/adminLayout"
        }
    }
};

module.exports = adminFunc;
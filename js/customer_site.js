const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'Bili资源',
        default: true,        // ← 加上这行 = 默认勾选 + 默认开启搜索
        
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
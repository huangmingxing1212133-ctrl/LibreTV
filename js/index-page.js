// index-page.js - 已永久关闭密码 + 免责声明，仅保留 URL 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    {
    // 只保留 URL 带 ?s=xxx 或 /s=xxx 自动搜索的功能，其他全部废除

    const path = window.location.pathname;
    const searchPrefix = '/s=';
    let keyword = '';

    // 支持 /s=关键词 格式
    if (path.startsWith(searchPrefix)) {
        keyword = decodeURIComponent(path.substring(searchPrefix.length));
    } else {
        // 支持 ?s=关键词 格式
        const params = new URLSearchParams(window.location.search);
        keyword = params.get('s') || '';
    }

    if (keyword) {
        const input = document.getElementById('searchInput');
        if (input) {
            input.value = keyword;
            toggleClearButton();
            setTimeout(() => search(), 300);
        }
    }
});
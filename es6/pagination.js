/**
 * Created by hunter on 2017/10/5.
 */
let pages = 25;

document.getElementById('pagination').innerHTML = createPagination(pages, 12);

function createPagination(pages, page) {
    let str = '<ul>';
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;

    if (page > 1) {
        str += '<li class=""><a onclick="createPagination(pages,'+(page-1)+')">previous</a></li>';
    }

    if (pages < 6) {
        for (let p = 1; p <= pages; p++) {
            active = p == page ? 'active' : 'no';
            str += '<li class="' + active + '"><a onclick="createPagination(pages,' + p + ')">' + p + '</a></li>';
        }
    }

    if (page > 2) {
        str += '<li class=""><a onclick="createPagination(pages,1)">1</a></li>';
        if (page > 3) {
            str += '<li class=""><a onclick="createPagination(pages,'+(page-2)+')">...</a></li>';
        }
    }

    if (page == 1) {
        pageCutHigh += 2;
    }
    if (page == 2) {
        pageCutHigh += 1;
    }
    if (page == pages) {
        pageCutLow -= 2;
    }
    if (page == pages - 1) {
        pageCutLow -= 1;
    }

    for (let p = pageCutLow; p <= pageCutHigh; p++) {
        if (p == 0) {
            p++;
        }
        if (p > pages) {
            continue;
        }
        active = p == page ? 'active' : 'no';
        str += '<li class="' + active + '"><a onclick="createPagination(pages,' + p + ')">' + p + '</a></li>';
    }

    if (page < pages - 2) {
        str += '<li class=""><a onclick="createPagination(pages,'+(page+2)+')">...</a></li>';
    }
    if (page < pages - 1) {
        str += '<li class=""><a onclick="createPagination(pages,pages)">' + pages + '</a></li>';
    }

    if (page < pages) {
        str += '<li class=""><a onclick="createPagination(pages,'+(page+1)+')">next</a></li>';
    }

    str += '</ul>';
    document.getElementById('pagination').innerHTML = str;
    return str;
}
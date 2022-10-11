/**
 * @Description: archives
 * @author: 小周
 * @date: 2022/1/12
 * @fileName: by.archives
 */

const archivesContext = {};

!(function () {
    document.addEventListener( "DOMContentLoaded", function () {
        Object.values( archivesContext ).forEach( f => f() );
    } );
})();



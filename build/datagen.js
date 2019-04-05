const path = require('path')
const fs = require('fs')
const rm = require('rimraf')
const {
  genRoutesFile
} = require('./routegen')
const matter = require('gray-matter');


// 先移除存放博客信息的data.js文件
const DATE_PATH = path.resolve(__dirname, '../src/utils/data.js');
const POSTS_DIR = path.resolve(__dirname, '../src/posts/');

function readdirSync(startPath) {
  let result = [];
  function finder(filePath) {
    let files = fs.readdirSync(filePath);
    files.forEach((val, index) => {
      let fPath = path.join(filePath, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fPath);
    });
  }
  console.log(startPath)
  finder(startPath);
  return result;
}

module.exports = async function getData() {
  var mdSummary = [];
  var files = readdirSync(POSTS_DIR); //["D:\\hsm\\my-blog\\src\\posts\\2018\\2018-11-14-Life.md"]
  for (index in files) {
    var filedir = files[index];
    if ((/\.md$/).test(filedir)) {
      var data = fs.readFileSync(filedir, 'utf8')
      var result = matter(data);
      var mdData = Object.assign({}, result.data)
      // 当文章的内容不为空时，添加文章对象到数组中
      if (mdData.contents !== '') {
        mdSummary.push({
          title: mdData.title,
          info: mdData.info,
          tags: mdData.tags,
          coverimg: mdData.coverimg,
          filepath: filedir
        })
      }
      fs.writeFile(path.resolve(__dirname, '../src/utils/tt.js'), "112" + JSON.stringify(mdSummary), {
        'flag': 'w'
      }, function (err) {
        if (err) {
          return console.error(err);
        }
      });

    }
  }

  // fs.readdir(POSTS_DIR, function (err, files) {
  //   if (err) {
  //     console.warn(err)
  //   } else {
  //     // //获取post目录下的文件夹和md文件路径
  //     // var dir = [];
  //     // var mdfile = [];
  //     // for (filename in files) {
  //     //   var filedir = path.join(POSTS_DIR, files[filename]);
  //     //   if ((/\.md$/).test(files[filename])) { //md file
  //     //     mdfile.push(filedir)
  //     //   } else { //dir
  //     //     dir.push(filedir)
  //     //   }
  //     // }

  //     // fs.writeFile(path.resolve(__dirname, '../src/utils/tt.js'),"11"+ JSON.stringify(readdirSync(POSTS_DIR)), {
  //     //   'flag': 'w'
  //     // }, function (err) {
  //     //   if (err) {
  //     //     return console.error(err);
  //     //   }
  //     // });

  //     // 用来存放所有文章信息的数组
  //     // var posts = [];
  //     // var routes = [];
  //     // for (filename in files) {
  //     //   if ((/\.md$/).test(files[filename])) {
  //     //     var filedir = path.join(POSTS_DIR, files[filename]);
  //     //     var data = fs.readFileSync(filedir, 'utf8')
  //     //     if (err) throw err;
  //     //     var result = matter(data);
  //     //     var post = Object.assign({}, result.data)
  //     //     // 当文章的内容不为空时，添加文章对象到数组中
  //     //     if (post.contents !== '') {
  //     //       post.contents = '';
  //     //       var route = {};
  //     //       posts.push(post);
  //     //       route.name = post.name;
  //     //       route.pagePath = `/${post.categories}/${route.name}`;
  //     //       routes.push(route);
  //     //       var origin = {
  //     //         name: post.name,
  //     //         pagePath: `/post/${post.name}`
  //     //       }
  //     //       routes.push(origin);
  //     //       for (var tag of post.tags) {
  //     //         var route = {}
  //     //         route.name = post.name;
  //     //         if (tag !== post.categories) {
  //     //           route.pagePath = `/${tag}/${route.name}`;
  //     //           routes.push(route);
  //     //         }
  //     //       }
  //     //     }
  //     //   }
  //     // }
  //     // genRoutesFile(routes).then(routesCode => {
  //     //   fs.writeFile(path.resolve(__dirname, '../src/router/page.js'), routesCode, {
  //     //     'flag': 'w'
  //     //   }, function (err) {
  //     //     if (err) {
  //     //       return console.error(err);
  //     //     }
  //     //   });
  //     // });
  //     // let postsStr = `export let postData = '${JSON.stringify(posts)}';`
  //     // // 将数组对象存入data.js
  //     // fs.writeFile(DATE_PATH, postsStr, {
  //     //   'flag': 'w'
  //     // }, function (err) {
  //     //   if (err) {
  //     //     return console.error(err);
  //     //   }
  //     // });

  //   }
  // });
}

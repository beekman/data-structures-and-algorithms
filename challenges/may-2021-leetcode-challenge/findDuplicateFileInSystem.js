/*Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"


Example 1:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
Example 2:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = (paths) => {
  //Use a map to group duplicate files
  let contentMap = new Map(), response = [];
  for(let pStr of paths) {
    let i = 0, j, k;
    while(pStr.charAt(i) !== ' ') i++;
    let path = pStr.slice(0, i);
    for(j = ++i; i < pStr.length; i++)
      if(pStr.charAt(i) === '(') k = i;
      else if(pStr.charAt(i) === ')') {
        let pathfile = path + '/' + pStr.slice(j, k),
          content = pStr.slice(k + 1, i);
        if(!contentMap.has(content))
          contentMap.set(content, [pathfile]);
        else contentMap.get(content).push(pathfile);
        j = i + 2;
      }
  }
  for(let v of contentMap.values())
    if(v.length > 1) response.push(v);
  return response;
};

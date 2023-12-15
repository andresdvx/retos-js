/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string.
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url = new String()) {
  if (url.includes("www.")) {
    const c = url.split("www.");
    const domain = c[1].split(".");
    return domain[0];
  }
  if (!url.includes("www.") && url.includes("http://") || url.includes("https://")) {
    const noHttp = url.split("//");
    const domain = noHttp[1].split(".");
    return domain[0];
  }
  const x = url.split(".");
  return x[0];
}
console.log(domainName("https://youtube"));

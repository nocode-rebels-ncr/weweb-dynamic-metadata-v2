export const config = {
  domainSource: "https://www.heyanon.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/?post=+",
          metaDataEndpoint: "https://xsrr-l2ye-dpbj.f2.xano.io/api:Coq7oZJp/posts/get_single/{post_id}"
      },
      {
          pattern: "/post/[^/]+",
          metaDataEndpoint: "https://xsrr-l2ye-dpbj.f2.xano.io/api:Coq7oZJp/posts/get_single/{post_id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};

export const config = {
  domainSource: "https://6738af62-2b3e-4202-8a3d-3c5a9b2fba3e.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/?post=[^/]+",
          metaDataEndpoint: "https://xsrr-l2ye-dpbj.f2.xano.io/api:Coq7oZJp/posts/get_single/{post_id}/meta"
      },
      {
          pattern: "/post/[^/]+",
          metaDataEndpoint: "https://xsrr-l2ye-dpbj.f2.xano.io/api:Coq7oZJp/posts/get_single/{post_id}/meta"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};

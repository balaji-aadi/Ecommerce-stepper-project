const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "Public",
      isFolder: true,
      items: [
        {
          name: "Public Folder 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false,
            },
            {
              name: "hello.html",
              isFolder: false,
            },
          ],
        },
        {
          name: "public_file",
          isFolder: false,
        },
      ],
    },
    {
      name: "Src",
      isFolder: true,
      items: [
        {
          name: "app.js",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default explorer;

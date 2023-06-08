export const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="self-start py-10 font-naruto text-2xl md:text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => <h3 className="py-5 text-xl">{children}</h3>,
    normal: ({ children }: any) => (
      <p className="my-5 w-full py-5 font-capriola text-base md:text-lg">
        {children}
      </p>
    ),
    strong: ({ children }: any) => (
      <strong className="w-full py-8 font-capriola text-base md:text-lg">
        {children}
      </strong>
    ),
    p: ({ children }: any) => (
      <p className="w-full py-10 font-capriola text-base md:text-lg">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer font-capriola text-base underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-xl pl-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg pl-5">{children}</ol>,
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-base">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li
        className="mt-6"
        style={{ listStyleType: 'disclosure-closed', marginTop: '32px' }}
      >
        {children}
      </li>
    ),
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
};

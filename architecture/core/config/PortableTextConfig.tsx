export const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="self-start py-5 font-naruto text-2xl md:text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => <h4 className="py-5 text-xl">{children}</h4>,
    // Ex. 2: rendering custom styles
    normal: ({ children }: any) => (
      <p className="w-full py-5 font-capriola text-base md:text-lg">
        {children}
      </p>
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
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl pl-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg pl-5">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-base">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li className="py-3" style={{ listStyleType: 'disclosure-closed' }}>
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
};

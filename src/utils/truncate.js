export const truncate = (str, n, link) => {
  return (
    <>
      {str.length > n ? (
        <>
          {str.substring(0, n)}{" "}
          {
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark font-bold hover:text-primary cursor-pointer"
            >
              Baca Selengkapnya...
            </a>
          }
        </>
      ) : (
        str
      )}
    </>
  );
};

// str.length > n
//     ? str.substring(0, n) + ` Baca Selengkapnya... ${(<h1>a</h1>).props }`
//         : str;

function Footer() {
  return (
    <footer className="">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-gray-700 md:p-8">
        <li>
          Created by{" "}
          <a
            href="https://mozart409.space"
            target="_blank"
            className="font-bold"
          >
            Amadeus Mader
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mozart409/next-howmuchcoffee"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
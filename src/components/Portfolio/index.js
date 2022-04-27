import React, { useContext, useEffect, useRef, useState } from "react";
import portfolio1 from "../../assets/images/portfolio1.png";
import PositionContext from "../../context/PositionContext";
import SpinnerLoading from "../UI/SpinnerLoading";
import CardPortfolio from "./CardPortfolio";
import WorkPortfolio from "./WorkPortfolio";

const fakeDataPortfolio = [
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 1],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 1],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 0],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 1],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 0],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 1],
  },
  {
    title: "Netflix Clone",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo voluptatum officia assumenda cumque modi reprehenderit
                exercitationem ducimus repellendus totam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Facere, eaque in! Magni non
                molestias nam eligendi suscipit culpa, voluptas ut, facere,
                totam distinctio eum laudantium velit quibusdam expedita ipsam
                sunt. Totam, laboriosam officia. Quis amet exercitationem magni
                provident, dolores accusantium ratione impedit voluptatibus
                molestias magnam reiciendis laborum veritatis, autem tenetur
                ducimus temporibus officiis inventore modi fugiat. Perferendis
                optio nam ipsa officiis non. Iure illum distinctio vel fuga at
                quaerat, hic voluptates explicabo. Minima iusto accusamus ea
                distinctio mollitia? Et nostrum laboriosam, accusamus tenetur
                aperiam, commodi similique aspernatur ipsum officiis quae est
                vero adipisci. Cum sed molestiae exercitationem aliquid, beatae
                fuga!`,
    link: "https://facebook.com",
    image: portfolio1,
    tag: [3, 0],
  },
];

function Index() {
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(false);
  const [dataPortfolio, setDataPortfolio] = useState(fakeDataPortfolio);
  const [works] = useState([
    { name: "UI/UX" },
    { name: "Web" },
    { name: "Mobile" },
    { name: "All" },
  ]);
  const [filter, setFilter] = useState(3);

  const limitHandler = async () => {
    setLoading(true);
    setTimeout(() => {
      setLimit(limit + 2);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setDataPortfolio(() => {
      return fakeDataPortfolio.filter(item => {
        return item.tag.includes(filter);
      });
    });
  }, [filter]);

  const filterHandler = data => {
    setFilter(data);
  };

  const Limit = () => {
    return (
      <div className="flex mt-36 mx-auto justify-center items-center">
        {dataPortfolio.length === 0 ? (
          <h1 className="text-white items-center font-thin text-lg bg-primary py-4 px-6 rounded-full">
            Data Portfolio Tidak Tersedia
          </h1>
        ) : limit >= dataPortfolio.length ? (
          <h1 className="text-white items-center font-thin text-lg bg-primary py-4 px-6 rounded-full">
            Data Sudah Ditampilkan Semuanya
          </h1>
        ) : loading ? (
          <SpinnerLoading />
        ) : (
          <button
            type="button"
            className="py-2.5 px-5 mr-2 text-lg text-white hover:bg-secondary bg-primary rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-secondary"
            onClick={limitHandler}
          >
            Load More
          </button>
        )}
      </div>
    );
  };

  const portfolioRef = useRef();
  const context = useContext(PositionContext);
  const { position, replaceOffset } = context;

  useEffect(() => {
    replaceOffset({ portfolio: portfolioRef.current.offsetTop });
  }, [position.link, replaceOffset]);

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="pt-28 pb-20 bg-slate-100"
    >
      <div className="container">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Portofolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-5 lg:4xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg">
              Project - project terbaru yang saya kerjakan selama ini
              menggunakan berbagai bahasa pemrograman dan framework. silahkan
              dilihat dan dapat dijadikan referensi bagi yang baru belajar
            </p>
            <div className="flex justify-evenly my-20 flex-wrap">
              {works.map((work, index) => {
                return (
                  <WorkPortfolio
                    key={index}
                    number={index}
                    filter={filter}
                    name={work.name}
                    onClick={filterHandler.bind(this, index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {dataPortfolio.slice(0, limit).map((item, index) => {
              return (
                <CardPortfolio
                  key={index}
                  deskripsi={item.deskripsi}
                  link={item.link}
                  title={item.title}
                  image={item.image}
                />
              );
            })}
          </div>
          <Limit />
        </div>
      </div>
    </section>
  );
}

export default Index;

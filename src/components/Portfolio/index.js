import React, { useEffect, useState } from "react";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/SelamatUltah.png";
import portfolio3 from "../../assets/images/kalkuDesign.png";
import portfolio4 from "../../assets/images/myFirsPortfolio.png";
import portfolio5 from "../../assets/images/UniversitasKos.png";
import portfolio6 from "../../assets/images/UiKomik.png";
import portfolio7 from "../../assets/images/UiStore.png";

import SpinnerLoading from "../UI/SpinnerLoading";
import CardPortfolio from "./CardPortfolio";
import WorkPortfolio from "./WorkPortfolio";

const fakeDataPortfolio = [
  {
    title: "Web Selamat Ulang Tahun",
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
    link: "https://selamat-ulang-tahun-my-love.web.app/",
    image: portfolio2,
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
    link: "https://netflix-clone-cfce8.firebaseapp.com/",
    image: portfolio1,
    tag: [3, 1],
  },
  {
    title: "Design Kalkulator",
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
    image: portfolio3,
    tag: [3, 0],
  },
  {
    title: "My First Portfolio",
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
    link: "https://myfristportfolio.anonghost025.repl.co/",
    image: portfolio4,
    tag: [3, 1],
  },
  {
    title: "Design Store",
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
    image: portfolio7,
    tag: [3, 0],
  },
  {
    title: "Universitas Kos",
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
    link: "https://github.com/AnonGhost09/UnKos_Tugas_Akhir",
    image: portfolio5,
    tag: [3, 1],
  },
  {
    title: "Design Komik",
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
    image: portfolio6,
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
      <div className="mx-auto mt-36 flex items-center justify-center">
        {dataPortfolio.length === 0 ? (
          <h1 className="items-center rounded-full bg-primary py-4 px-6 text-lg font-thin text-white">
            Data Portfolio Tidak Tersedia
          </h1>
        ) : limit >= dataPortfolio.length ? (
          <h1 className="items-center rounded-full bg-primary py-4 px-6 text-lg font-thin text-white">
            Data Sudah Ditampilkan Semuanya
          </h1>
        ) : loading ? (
          <SpinnerLoading />
        ) : (
          <button
            type="button"
            className="mr-2 rounded-lg border border-gray-200 bg-primary py-2.5 px-5 text-lg text-white hover:bg-secondary dark:border-gray-600 dark:bg-primary dark:text-white dark:hover:bg-secondary dark:hover:text-white"
            onClick={limitHandler}
          >
            Load More
          </button>
        )}
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-28 pb-20 transition-colors duration-1000 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary ">
              Portofolio
            </h4>
            <h2 className="lg:4xl mb-5 text-3xl font-bold text-dark transition-colors duration-1000 dark:text-white">
              Project Terbaru
            </h2>
            <p className="text-base font-medium text-secondary lg:text-lg">
              Project - project terbaru yang saya kerjakan selama ini
              menggunakan berbagai bahasa pemrograman dan framework. silahkan
              dilihat dan dapat dijadikan referensi bagi yang baru belajar
            </p>
            <div className="my-20 flex flex-wrap justify-center">
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
          <div className="grid gap-8 lg:grid-cols-2">
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

// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/layout.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";


// type PropsA = {
//     title: string,
//     description: string,
// }
//
// type PropsB = {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // INTERSECTION
// type Props = PropsA & PropsTwo;
//
// interface PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number,
// }
//
// // PropsTwo = {title, description, price, sort}

{/*<h2 className="cf-text" id="id"></h2>*/}
{/*/!* h2.cf-text#id *!/*/}





function App() {


  return (
    <>
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
      {/*<ArrowFunctionalComponentWithProps title="Second Title" description="lorem ipsum dolor"/>*/}

      {/*<Layout addClasses="bg-gray-50">*/}
      {/*  /!*<ArrowFunctionalComponentWithProps*!/*/}
      {/*  /!*  title="Second Title"*!/*/}
      {/*  /!*  description="lorem ipsum dolor"*!/*/}
        {/*/>*/}
      {/*  /!*<p className="text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, laboriosam!</p>*!/*/}
      {/*  /!*<Counter />*!/*/}
      {/*  /!*<ClassCounter/>*!/*/}
      {/*  <CounterAdvanced/>*/}
      {/*</Layout>*/}

      <Layout addClasses="bg-gray-50">
        <NameChanger/>
      </Layout>



    </>




  )
}

export default App

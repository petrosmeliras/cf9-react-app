// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import Layout from "./components/layout.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
// import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
// import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
// import WindowSize from "./components/LessonSix/WindowSize.tsx";
// import FocusInput from "./components/LessonSix/FocusInput.tsx";
// import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
// import {useEffect} from "react";
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

import {Route, Routes} from "react-router";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
import Homepage from "./pages/homepage.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";

{/*<h2 className="cf-text" id="id"></h2>*/}
{/*/!* h2.cf-text#id *!/*/}

// function setup() {
//   alert("count")
// }
//
// useEffect(setup, [count])

// useEffect(() => {
//   alert("Hello World!");
// }, []);



function App() {

  // useEffect(() => {
  //   alert("Hello World!");
  // }, [])

  // useEffect(() => {
  //   history.pushState({}, "", "/about");
  // }, []);

  return (
    <>
      {/*LESSON TWO*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*LESSON THREE*/}
      {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*  title="Second Title"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
      {/*/>*/}
      {/*<Layout addClasses="bg-gray-100">*/}
      {/*  <ArrowFunctionalComponentWithProps*/}
      {/*    title="Second Title"*/}
      {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
      {/*  />*/}
      {/*</Layout>*/}


      {/*LESSON FOUR*/}
      {/*<Layout addClasses="bg-gray-50">*/}
      {/*  /!*<Counter />*!/*/}
      {/*  /!*<ClassCounter/>*!/*/}
      {/*  <CounterAdvanced/>*/}
      {/*</Layout>*/}

      {/*<Layout addClasses="bg-gray-50">*/}
      {/*  /!*<NameChanger/>*!/*/}
      {/*  /!*<CounterWithCustomHook/>*!/*/}
      {/*  <NameChangerWithTitle/>*/}
      {/*</Layout>*/}

    {/*  Lesson Six*/}
    {/*  <Layout addClasses="bg-gray-50">*/}
    {/*    /!*<AutoRedirectAdvanced />*!/*/}
    {/*    /!*<WindowSize />*!/*/}
    {/*    /!*<FocusInput />*!/*/}
    {/*    <PreviousValue/>*/}
    {/*  </Layout>*/}


    {/*  Lesson Seven*/}
    {/*  <Routes>*/}
    {/*    <Route index element={<Homepage/>} />*/}
    {/*    <Route path="name-changer" element={<NameChanger />} />*/}
    {/*    <Route path="counter" element={<Counter />} />*/}
    {/*    <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
    {/*  </Routes>*/}

      {/**/}
      {/*/examples/name-changer*/}
      {/*/examples/counter*/}
      {/*/examples/counter-advanced*/}

      <Routes>
        {/*Χρησιμοποιουμε το routerlayout αντι για το κλασικο layout το οποιο
        δεν χρειαζεται το addclasses και το children αλλα το outlet μονο. ετσι μπορουμε να βαλουμε διαφορετικο layout
        σε διάφορα routes που Θέλουμε . δλδ να διαφοροποιούμε ανα σελιδα το layout πχ οταν κανει Loggin o χρηστης να του
        αλλάζει τα χρώματά.*/}
        <Route element={<RouterLayout/>}>
          <Route index element={<Homepage/>} />
          {/*<Route path="examples?"> etsi den einai aparaithto to examples prin apo to counter, name-changer ktl*/}
        {/*  <Route path="examples">*/}
        {/*    <Route path="name-changer" element={<NameChanger />} />*/}
        {/*    <Route path="counter" element={<Counter />} />*/}
        {/*    <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
        {/*  </Route>*/}
        {/*</Route>*/}

        {/*/users*/}
        {/*/users/userId*/}
          <Route path="users">
            {/*<Route index element={<UserListPage/>} />*/}
            <Route path=":userId" element={<UserPage />} />
            {/*  /users/15 Path params*/}
            {/*  /users?id=15 Query params*/}
          </Route>
        </Route>

        <Route path="search" element={<SearchPage/>} />
        {/* /search?query=React&page=2*/}



        CATCH ALL SEGMENT TO ASTERAKI. KALOUME OLA TA ARXEIA
        {/*/files*/}
        {/*/files/**/}
        {/*<Route path="files/*" element={<File />} />*/}

      {/*  GIA NA DIABASOUME ESOTERIKA MESA STO COMPONENT TI EXEI ZHTHSEI O XRHSTHS
      XRHSIMOPOIOUME TO USEPARAMS

      let params = useParams();
      let filepath = params["*"] */}


        {/*Error 404 page not found. san route to vazoume panta teleutaio giati an to valoyme pano pano
         epeidh pianei ta panta ( catch all segment) h selida tha bgazei panta 404 */}
        {/*<Route path="*" element={<NotFoundPage />} />*/}


      </Routes>


    </>




  )
}
export default App;

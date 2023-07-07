function useFoo() {
   let foo = 0;

   function getFoo() {
      return foo;
   }

   function setFoo(value: typeof foo) {
      foo = value;
   }

   return { getFoo, setFoo };
}

const Foo = () => {
   const { getFoo, setFoo } = useFoo();

   console.log(getFoo());
   setFoo(1);
   console.log(getFoo());

   return null;
};

export default Foo;

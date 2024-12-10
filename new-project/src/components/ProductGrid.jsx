const products = [
    { id: 1, name: "Smart Watch", image: "./public/img1.jpg" },
    { id: 2, name: "Earbuds", image: "./public/img2.jpg" },
    { id: 3, name: "Monitor", image: "./public/img3.jpg" },
    { id: 1, name: "Apple Smartphone", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" },
    { id: 2, name: "Accessories", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/glucometer/7/u/s/-original-imah6g5a3zr3szdg.jpeg?q=70" },
    { id: 3, name: "Security Camera", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/home-security-camera/x/6/h/-original-imagts94fehx6syy.jpeg?q=70" },
  ];
  
  export default function ProductGrid() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Best of Electronics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain rounded-lg hover:scale-110"
              />
              <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
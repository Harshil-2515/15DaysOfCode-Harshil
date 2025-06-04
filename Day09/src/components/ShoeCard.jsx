const ShoeCard = ({imgURL, changeBigShoe, bigShoeImg}) => {

    const handleClick=()=>{
    if(bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
}
  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
        
        onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="Shoe Collection" height={127} width={103} className="object-contain" />
            </div>
        </div>
  )
}

export default ShoeCard
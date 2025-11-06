const Connect = () => {
    
    const links = [
    { name: "Resume", url: "https://drive.google.com/file/d/1lYQewL_vuecA3Vcixmv_ttN7SHLfav2f/view?usp=sharing" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/srinjoy-ghosh-97a9852a4/" },
    { name: "Github", url: "https://github.com/sgcodes7471" }
    ];


    return (
         <div className="my-4">
            {
                links.map((link , idx) => {
                    return (
                        <a  
                            key={idx}
                            href={link.url} 
                            className="text-gray-500 px-4 font-medium text-lg md:text-xl font-mono tracking-widest"
                        >
                            {link.name}
                        </a>
                    )
                })
            }

         </div>
    )


}

export default Connect
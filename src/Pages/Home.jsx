import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import {DndContext, closestCenter} from "@dnd-kit/core"
import {arrayMove, SortableContext,verticalListSortingStrategy, horizontalListSortingStrategy, useSortable
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import './Home.css'
import Search from "../components/Search";

const Home =  () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/')
    }
    const allImages = [
        { 
            id: 1, 
            src: '/Algeria.png', 
            alt: 'Algeria',
            tags: ['africa', 'algeria'] 
        },

        { id: 2, 
            src: '/Spain.png', 
            alt: 'Spain', 
            tags: ['europe', 'spain'] },
        { id: 3, 
            src: '/France.png', 
            alt: 'France', 
            tags: ['europe', 'france'] },
        { id: 4, 
            src: '/Uruguay.png', 
        alt: 'Uruguay',  
        tags: ['south america', 'uruguay'] },
        { id: 5, 
            src: '/Afghanistan.png', 
        alt: 'Afghanistan',  
        tags: ['asia', 'Afghanistan'] },
        { id: 6, 
            src: '/Argentina.png', 
        alt: 'Argentina',  
        tags: ['south america', 'argentina'] },
        { id: 7, 
            src: '/Australia.png', 
        alt: 'Australia',  
        tags: ['oceania', 'australia'] },
        { id: 8, 
            src: '/Bahamas.png', 
        alt: 'Bahamas',  
        tags: ['oceania', 'bahamas'] },
        { id: 9, 
            src: '/Brazil.png', 
        alt: 'Brazil',  
        tags: ['south america', 'brazil'] },
        { id: 10, 
            src: '/Cameroon.png', 
        alt: 'Cameroon',  
        tags: ['africa', 'cameroon'] },
        { id: 11, 
            src: '/Canada.png', 
        alt: 'Canada',  
        tags: ['north america', 'canada'] },
        { id: 12, 
            src: '/China.png', 
        alt: 'China',  
        tags: ['asia', 'china'] },
        { id: 13, 
            src: '/Egypt.png', 
        alt: 'Egypt',  
        tags: ['africa', 'egypt'] },
        { id: 14, 
            src: '/Germany.png', 
        alt: 'Germany',  
        tags: ['europe', 'germany'] },
        { id: 15, 
            src: '/Iran.png', 
        alt: 'Iran',  
        tags: ['asia', 'iran'] },
        { id: 16, 
            src: '/Iraq.png', 
        alt: 'Iraq',  
        tags: ['asia', 'iraq'] },
        { id: 17, 
            src: '/Jamaica.png', 
        alt: 'Jamaica',  
        tags: ['north america', 'jamaica']},
        { id: 18, 
            src: '/Mexico.png', 
        alt: 'Mexico',  
        tags: ['north america', 'mexico'] },
        { id: 19, 
            src: '/netherlands.png', 
        alt: 'Netherlands',  
        tags: ['europe', 'netherlands'] },
        { id: 20, 
            src: '/New-Zealand.png', 
        alt: 'New-Zealand',  
        tags: ['oceania', 'Newzealand']},
        { id: 21, 
            src: '/Nigeria.png', 
        alt: 'Nigeria',  
        tags: ['africa', 'nigeria'] },
        { id: 22, 
            src: '/Portugal.png', 
        alt: 'Portugal',  
        tags: ['europe', 'portugal'] },
        { id: 23, 
            src: '/SouthAfrica.png', 
        alt: 'SouthAfrica',  
        tags: ['africa', 'southafrica'] },
        { id: 24, 
            src: '/srael.png', 
        alt: 'srael',  
        tags: ['asia', 'isreal'] },

    ];
    const [images, setImages] = useState(allImages)
    const [searchTags, setSearchTags] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const SortableUser = ({image}) => {
        const {attributes, listeners, setNodeRef, transform,transition} = useSortable({id: image.id})
        const style = {
            transition,
            transform: CSS.Transform.toString(transform),
            
        }
        return (
            <div ref={setNodeRef} {...attributes}  {...listeners} style={style} >
                       <img src={image.src} alt={images.alt} /> 
                    </div>
        )
    }

    const handleSearch = (tags) => {
        // search images based on tags
        const searchedImages = allImages.filter((image) =>
          tags.some((tag) => image.tags.includes(tag))
        );
        setImages(searchedImages);
      };
      
      const handleReset = () => {
        // Reset the images to the initial state
        setSearchTags([]);
        setImages(allImages);
      };
      function handleDragEnd(event) {
        const {active, over } = event;
        if (active.id === over.id) {
            return;
        }
        setImages(images => {
            const oldIndex = images.findIndex((image) => image.id === active.id)
            const newIndex = images.findIndex((image) => image.id === over.id)
            return arrayMove(images, oldIndex, newIndex)
        });
    }

    return (
        
        <div className="home">
            <h1>Welcome to my Image gallery</h1>
            <h2>{user && user.email}</h2>
            <button onClick={handleLogout} className="btn">Logout</button>
            <Search onSearch={handleSearch} onReset={handleReset} />
        <div className="imagess">
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd} >
                <SortableContext items={images} strategy={verticalListSortingStrategy} >
                {images.map((image, index) => (
                    <SortableUser key={image.id} image={image} />
                ))}
                </SortableContext>
        </DndContext>
        </div>
        
        </div>
    );
  
}

export default Home
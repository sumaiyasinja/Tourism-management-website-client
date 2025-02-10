import React, { useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';

const AddTouristSpot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);

    const onSubmit = (data) => {
        const spot ={
          ...data,
          author_name: user?.displayName || "Anonymous",
          author_email: user?.email || "No Email Provided"
        }
        console.log(spot);
        

        axios.post("http://localhost:5000/spots", spot)
        .then (res =>{
          console.log(res.data);
        })
        .catch(err => console.log(err))

      };

    return (
        <div>
             <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-700">Add Tourist Spot</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="url" {...register("image", { required: true })} placeholder="Image URL" className="w-full p-2 border rounded-lg" />
        {errors.image && <span className="text-red-500">This field is required</span>}

        <input type="text" {...register("tourists_spot_name", { required: true })} placeholder="Tourist Spot Name" className="w-full p-2 border rounded-lg" />
        {errors.tourists_spot_name && <span className="text-red-500">This field is required</span>}

        <input type="text" {...register("country_Name", { required: true })} placeholder="Country Name" className="w-full p-2 border rounded-lg" />
        {errors.country_Name && <span className="text-red-500">This field is required</span>}

        <input type="text" {...register("location", { required: true })} placeholder="Location" className="w-full p-2 border rounded-lg" />
        {errors.location && <span className="text-red-500">This field is required</span>}

        <textarea {...register("description", { required: true })} placeholder="Short Description" className="w-full p-2 border rounded-lg"></textarea>
        {errors.description && <span className="text-red-500">This field is required</span>}

        <input type="number" {...register("average_cost", { required: true })} placeholder="Average Cost ($)" className="w-full p-2 border rounded-lg" />
        {errors.average_cost && <span className="text-red-500">This field is required</span>}

        <input type="text" {...register("seasonality", { required: true })} placeholder="Best Season to Visit" className="w-full p-2 border rounded-lg" />
        {errors.seasonality && <span className="text-red-500">This field is required</span>}

        <input type="text" {...register("travel_time", { required: true })} placeholder="Estimated Travel Time" className="w-full p-2 border rounded-lg" />
        {errors.travel_time && <span className="text-red-500">This field is required</span>}

        <input type="number" {...register("totalVisitorsPerYear", { required: true })} placeholder="Total Visitors Per Year" className="w-full p-2 border rounded-lg" />
        {errors.totalVisitorsPerYear && <span className="text-red-500">This field is required</span>}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
      </form>
    </div>
        </div>
    );
};

export default AddTouristSpot;

export default function TaskForm({handleFormSubmit,name,handleInputChange,updateTask,isEditing}){
    return(
        <div>
            <form className="task-form" onSubmit={isEditing?updateTask : handleFormSubmit} >
                <input 
                    autoComplete="off"
                    type="text" 
                    placeholder="add a task"
                    name="name"
                    value={name}
                    onChange={handleInputChange}   
                />
                <button type="submit">{isEditing?"Edit":"Add"}</button>
            </form>
        </div>
    );
}
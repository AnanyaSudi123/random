import React from "react"
import './plantfind.css'

const PlantFind: React.FC = () => {
    const [text, setText] = React.useState<string>('');
    const users = [
        {
          name: 'Plant1',
        },
        {
          name: 'Plant2',
        },
        {
          name: 'Plant3',
        },
        {
          name: 'Plant4',
        },
      ];
      const [userList, setUserList] = React.useState<
    { name: string; }[] | undefined
  >(users);
  const handleOnClick = () => {
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.name === text)
        : undefined;

    console.log(findUsers);

    setUserList(findUsers);
  };
    return (
        <>
            {/* <div> search bar </div> */}
            <div className="title">
                <h1>Nilgiri Biosphere Reserve</h1>
            </div>
            {/* <div className="input__wrapper">
                <input
                    type="text"
                    placeholder="Search Plant"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setUserList(users);
                    }}
                />
                <button disabled={!text} onClick={handleOnClick}>
                    Search
                </button>
            </div> */}
            {/* <div className="body">
                {userList && userList?.length === 0 && (
                    <div className="notFound">No User Found</div>
                )}

                {userList &&
                    userList?.length > 0 &&
                    userList?.map((user) => {
                        return (
                            <div className="body__item">
                                <h3>Name: {user?.name}</h3>
                                
                            </div>
                        );
                    })}
            </div> */}
        </>
    );
}

export default PlantFind;


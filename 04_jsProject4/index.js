const url = "https://api.github.com/users";
const searchInput = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#search-btn");
const profileContainer = document.querySelector("#profileContainer");
const loading = document.querySelector("#loading");

const generateProfile = (profile) => {
  return `
    <div class="profile-box">
            <div class="top-section">
                <div class="left">
                    <div class="profile">
                        <img src="${profile.avatar_url}" alt="Profile">
                        
                    </div>
                    <div class="self">
                        <h1>${profile.name}</h1>
                        <h1>${profile.login}</h1>
                    </div>
                </div>
                <a href="${profile.html_url}">
                <button class="main-btn">Check Profile</button>
                </a>
            </div>
            <div class="about">
                <h2>About</h2>
                <p>${profile.bio}</p>
            </div>
            <div class="status">
                <div class="status-item">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="status-item">
                    <h3>Followering</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="status-item">
                    <h3>Repos</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>

    `;
};

const fetchProfile = async () => {
  const username = searchInput.value;

  loading.innerText = "Loading......";
  loading.style.color = "black"

  try {
    const res = await fetch(`${url}/${username}`);
    const data = await res.json();
    if(data.bio){
        loading.innerText = "";
        profileContainer.innerHTML = generateProfile(data)
    }else{
        loading.innerHTML = data.message;
        loading.style.color = "red"
        profileContainer.innerHTML = ""
    }
  } catch (error) {
    console.log(error);
    loading.innerText = "";
  }
};

searchBtn.addEventListener("click", fetchProfile);

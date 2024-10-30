import { useSelector } from "react-redux";

const UserMenu = () => {
  const userVal = useSelector((store) => store.app.isUserMenuEnabled);

  return !userVal ? null : (
    <div className="shadow-xl p-2">
      <div className="py-10 m-0 border-b-2 border-gray-200 ">
        <ol>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/438941/user-round.svg"
                  alt="User Account"
                  className="h-8"
                ></img>
              </div>
              <div className="pl-2">User</div>
            </div>
          </li>
          <li className="pl-10">@Username123</li>
          <li className="pl-10 text-blue-800">View your channel</li>
        </ol>
      </div>

      <div className="p-2 m-2 border-b-2 border-gray-200">
        <ol>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/520752/google-plus.svg"
                  alt="Google logo"
                  className="h-7"
                ></img>
              </div>
              <div>Google Account</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/510249/switch-accounts.svg"
                  alt="Switch User"
                  className="h-6"
                ></img>
              </div>
              <div>Switch User</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/358205/signout.svg"
                  alt="SignOut"
                  className="h-5"
                ></img>
              </div>
              <div>SignOut</div>
            </div>
          </li>
        </ol>
      </div>

      <div className="p-2 m-2 border-b-2 border-gray-200">
        <ol>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/473496/youtubestudio.svg"
                  alt="SignOut"
                  className="h-7"
                ></img>
              </div>
              <div>Youtube Studio</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/447768/rupee-note.svg"
                  alt="Rupee"
                  className="h-7"
                ></img>
              </div>
              <div>Purchases and Subscriptions</div>
            </div>
          </li>
        </ol>
      </div>

      <div className="p-2 m-2 border-b-2 border-gray-200">
        <ol>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/310719/dark-theme.svg"
                  alt="Appearance"
                  className="h-7"
                ></img>
              </div>
              <div>Appearance</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/535472/language.svg"
                  alt="Language"
                  className="h-6"
                ></img>
              </div>
              <div>Language</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/501060/web.svg"
                  alt="Location"
                  className="h-8"
                ></img>
              </div>
              <div>Location</div>
            </div>
          </li>
        </ol>
      </div>

      <div className="p-2 m-2 flex border-b-2 border-gray-200">
        <div>
          <img
            src="https://www.svgrepo.com/show/522658/settings.svg"
            alt="Settings"
            className="h-8"
          ></img>
        </div>
        <div>Settings</div>
      </div>

      <div className="p-2 m-2 border-b-2 border-gray-200">
        <ol>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/521701/help.svg"
                  alt="Help"
                  className="h-7"
                ></img>
              </div>
              <div>Help</div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div>
                <img
                  src="https://www.svgrepo.com/show/370981/feedback.svg"
                  alt="Feedback"
                  className="h-7"
                ></img>
              </div>
              <div>Send Feedback</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default UserMenu;

Part 1: Test Planning

The below test cases should cover Chrome, Firefox, Safari, MS Edge, mobile Chrome and mobile Safari. I use Desktop firefox for the below test cases.

description: test saving a show 
Priority: high
Preconditions:Users sign in Philo with phone no or email.
Steps:
1. land on home screen.
2. Choose "the dailiy show with Trevor Noah" and add the show to saved.
3. Go to saved folder 
Expected Results:
1. The "Save" button chagnes to "Saved"
2. Go to saved folder on the top or saved folder under the hero image, "the dailiy show with Trevor Noah" show should be present.
3. Mouse over to "Saved" button and it should change to "unsave". 

description: test search 
Priority: high
Preconditions:Users sign in Philo with phone no or email.
Steps:
1. land on home screen.
2. On the search field, enter "peppa" or special characters "$*^peppa"
3. Click peppa pig from search result
4. Repeat the above steps, Search different channels, episode, broadcast, enter key words: 
Expected Results:
1. When users enter "peppa", auto suggestion list should be presnt.
2. Top result should be the one which matches the key word: peppa pig.
3. Once words are entered, clear icon on the right should be presnt. Click clear icon, the search field should be empty.
4. After users enter search words, click anywhere outside the search box, auto suggestion list should disappear. Click search icon, auto suggestion list should be present.  
3. There should be an option where users can click to see all the result-"see all results"
4. Click peppa pig from search result, hero image should change to Peppa pig related and related vedios should be present underneath. 
Even users enter special charaters, related search result should be present. 

description: user profiles
Priority: high
Preconditions:Users sign in Philo with phone no or email.
Steps:
1. Navigate to user profile page from top right square button.
2. click settings tab, edit user profile iamge, phone no and email address.
3. Toggle on and off "start channel playback from live"
3. click "switch profiles" tab.
4. Click "add" icon. 
5. Click "edit profile"
Expected Results:
1. Settings: 
User should be able to change the profile image, name, phone no and email.
If "start channel playback from live" toggle on, go to live channel and verify it starts live.
If "start channel playback from live" toggle off, the live channel starts from the beginning of the show.
2. Switch profiles
Click "add" icon, users should able to add new profile. 
Users are required to enter name under profile image. 
User are able to close user-profile-add window by clicking "X" or Cancel button.
Users are able to switch between different profiles. 
Click edit profile at the buttom, users are able to delete the profile or edit log in information.
Click close "X", it should direct to setting tab by default. 


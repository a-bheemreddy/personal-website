// projectsData.js

const projectsData = [
  // GAN
    {
      title: 'Generative Adversial Network (GAN) Variants for Image Generation',
      shortName: 'Generative Adversarial Networks',
      path: "/project/GAN",
      image: "GAN/cat7.png",
      content: [
        {
          type: 'Images', 
          images: ['GAN/cat1.png', 'GAN/cat2.png','GAN/cat3.png','GAN/cat4.png','GAN/cat5.png','GAN/cat6.png'],
          caption: "Evolution of GAN generations over multiple epochs",
          height:0.9, // multiplier by 20vh
          smallScreenHeight:1, // multplier by 15vh
        },
        {
          type: 'Text', 
          paragraphs: ['In this project, I trained generative adversarial networks (GANs) on multiple datasets. \
            The goal of GANs is to learn the underlying data distribution. This is done by two competing \
            models: the generator and discriminator. The Generator network tries to generate a data the \
            resembles the training data, and tries to fool the discriminator. The discriminator tries to \
            distinguish the original data from the generated data. Through training, both these models \
            iteratively get better, which ultimately improves the quality of the generated images.']
        },
        {
          type: 'Images',
          images: ['GAN/GAN_network.png'],
          caption: 'GAN architecture',
          height:1.6,
          smallScreenHeight:1.3,
        },
        {
          type: 'Text',
          paragraphs:[
            'I implemented various GAN architectures and losses. The original GAN has a few \
            limitations, including mode collapse, unstable training and convergence, as well as high \
            sensitivity to hyperparameters. To overcome these issues, I also implemented Least-Squares GAN \
            (LS-GAN). LS-GAN reduces instability in training by using Mean Squared Error instead of Binary Cross-Entropy loss. \
            I also implemented Wasserstein GANs (WGAN), which is known for producing higher quality images. \
            WGAN uses Wasserstein distance to measure the discrepancy between the real data distribution \
            and the generated data distribution which further improves the output.',
            
            'I trained these GANs on a cat face dataset as well as a flower dataset. Due to the limited \
            dataset size, and to prevent overfitting, I employed methods of data augmentation, including resizing, \
            random crops, random color jitters, and random horizontal flipping. The final results can be seen below.']
        },
        {
          type: "Images", 
          images: ['GAN/cat7.png', 'GAN/flower.png'],
          caption: "WGAN generated cats and flowers after multiple epochs of training.",
          height: 1.4,
          smallScreenHeight: 1.2
        },
      ]
    },
    // KPM
    {
      title: 'Key Point Matching, Fundamental Matrix Estimation, and Stereo Depth Estimation',
      shortName: 'Key Point Matching',
      path: "/project/KPM",
      image: "KPM/stereoDepth.png",
      content: [
        {
          type: 'Text', 
          paragraphs: [
            'This project explores epipolar geometry and applications of Computer Stereo Vision. In \
            other words, this project focuses on the geometry involved when 2 cameras are used to view \
            the same 3D scene from 2 different perspectives.'
          ]
        },
        {
          type: 'Text', 
          heading: 'Key Point Matching',
          paragraphs: [
            'Key Point Matching is the task of finding correspondences between 2 images of the same scene \
            taken from different perspectives. I used the SIFT descriptor to identify key points in both images \
            , and then used Lowe\'s ratio test to determine if key points between the two images could be \
            considered a pair. Lowe\'s test works by assuming that a point A in image 1 forms a correspondence with \
            point B in image 2 if their descriptor distance is small, and the second best match for point A \
            in image 2 is much worse than point B.',

            'This method of calculating corresponding points produces very good outcomes, given the \
            simplicity of Lowe\'s Ratio test. Some hyperparameter tuning is required to determine how \
            much better the best correspondence must be compared to the second best for a given point. \
            Using a ratio of 0.3, I arrived with the following result on the set of images.'
          ]
        },
        {
          type: 'Images',
          images: ['KPM/KPM.png'],
          caption: 'Key Point Matching using SIFT and Lowe\'s Ratio Test',
          height:1.6,
          smallScreenHeight:1,
        },
        {
          type: 'Text',
          heading: 'Fundamental Matrix Estimation',
          paragraphs:[
            'The fundamental matrix is a transformation, that encodes the epopolar geometry between the \
            two images. Given a pair of corresponding points, multiplying the point (in homogenous \
            coordinates) of image A by the fundamental matrix describes the epipolar line on \
            image B on which that corresponding point must lie. The fundamental matrix can be \
            calculated using the 8-point algorithm. We need a minimum of 8 matching points to calculate \
            the entire matrix.',

            'Given a set of corresponding points calculated using the key-point matching algorithm \
            mentioned previously, we need to choose at least 8 points to estimate the matrix. However, \
            deciding which set of 8 points can be challenging. Given that some corresponding points might \
            be noisy, and some might even be completely wrong, our matrix might be distorted. To solve \
            this problem, I used RANSAC algorithm. Essentially, we run the 8 point algorithm for many \
            sets of 8 random points. For each fundamental matrix calculated, we check how well it matches \
            with the remaining corresponding points. The fundamental matrix that results in the least number \
            of outliers among the remaining corresponding points is considered the best. Doing more \
            iterations of RANSAC increases the probability of finding a better fundamental matrix.'
          ]
        },
        {
          type: 'Images',
          images: ['KPM/FundMat1.png', 'KPM/FundMat2.png'],
          caption: 'Epipolar Lines from calculated Fundamental Matrix. The intersection of lines in \
          one image is the camera location of the other image',
          height:1.6,
          smallScreenHeight:1.6,
        },
        {
          type: 'Text',
          paragraphs:[
            'After estimating the fundamental matrix, I proceeded to plot the epipolar lines calculated \
            from the fundamental matrix. Ideally, with a good fundamental matrix, all the epipolar lines \
            must intersect at a single point. This intersection need not be on the image itself, but may \
            exist beyond the image, by extending the lines past the bounds of the image. The point at which the \
            lines intersect is the camera location of the other image.'
          ]
        },
        {
          type: 'Text',
          heading: 'Depth Estimation using Stereo',
          paragraphs:[
            'Using two side-by-side images of an object that frontal parallel, we can estimate the relative \
            depth of an image. The way this process works is by the displacement disparity between near \
            and far points in the images. Points that are closer to the camera will shift a greater \
            amount between the 2 images as compared to points that are further away, which will shift less. \
            Therefore, by computing the horizontal displacement between points in the images, we can estimate \
            the depth.',

            'For every pixel in the first image, consider its neighboring patch of pixels A, say a 20x20 patch \
            around the pixel. In the second image, we will compare all 20x20 patches in the same row as A. \
            In doing this, we find patch B in the second image with the highest similarity with patch A. \
            We then compute the horizontal shift between patch A in the first image and patch B in the \
            second image. This shift value is computed for all pixels in the first image. This leads to \
            a heat map, where the higher shift corresponds to a lower depth, and vice-versa. Note that \
            this heat map does not represent the depth itself, and is also quite noisy. Some \
            post-processing and smoothening will be required to actually obtain a clear depth map.'
          ]
        },
        {
          type: "Images", 
          images: ['KPM/stereoOrig.png', 'KPM/stereoDepth.png'],
          caption: "Depth Estimation using Stereo. Lighter yellow colour represents portions of the image \
          closer, while darker green is further away.",
          height: 1.6,
          smallScreenHeight: 1.6
        },
      ]
    },
    // DQN
    {
      title: 'Deep Q-Learning for Atari Games',
      shortName: 'Deep Q-Learning',
      path: "/project/dqn",
      image: 'DQN/BreakOut.gif',
      content: [
        {
          type: 'Images',
          images: ['DQN/BreakOut.gif'],
          caption: 'My DDQN model playing the Atari Game Breakout, after training for 2000 episodes.',
          height:2.4,
          smallScreenHeight:2.8,
        },
        {
          type: 'Text', 
          paragraphs: [
            "This project explores the field of Reinforcement Learning. The goal of Reinforcement Learning, \
            is to train an agent to behave optimally in an environment. Reinforcement learning often \
            models the environment as a Markov Decision Problem, where at every state in the environemnt, \
            the agent takes an action, leaving the agent in a new state, and with some reward. \
            The goal is to maximize the agent's reward as it interacts with the environemnt.",

            "Q-Learning is a common algorithm used in RL. The idea is that for every state-action pair, \
            a value is stored, keeping track of how good the state-action pair is. Every time the agent is \
            state s and takes action a, the value of that pair is updated based on the current value, \
            the reward received, and the expected future reward. The 'estimated future reward' is essentially \
            the value of the next state, given that the optimal action is taken. Formmaly, the update equation \
            Q-learning is given below."
          ]
        },
        {
          type: 'Images',
          images: ['DQN/QL_Bell.JPG'],
          caption: 'Equation for Q-Learning Update',
          height:1.6,
          smallScreenHeight:1,
        },
        {
          type: 'Text', 
          heading: 'Deep Q-Learning',
          paragraphs: [
            "While Q-Learning is a great algorithm, it has a key limitation, which is that it's time complexity \
            scales with the number of states and action. In modern applications, the state-space can be huge, \
            even infinite. Therefore, we need a way to avoid using a simple look-up table for all state-action pairs. \
            This is where Deep Q-Learning comes in. In deep Q-Learning, rather than fetching the Q values from a table, \
            we estimate the Q-values of the current state using a Deep Neural Network."
          ]
        },
        {
          type: 'Images',
          images: ['DQN/DQNvsQL.png'],
          caption: 'Deep Q-Learning vs Q-Learning',
          height:2,
          smallScreenHeight:2,
        },
        {
          type: 'Text',
          paragraphs:[
            "In this project, I trained a Deep Q-network to play the Atari Game breakout. The reason for \
            using Deep Q-Learning is due to the large state space of the game. I created a Convolutional Neural \
            Network, which takes the game screen pixels as input, and outputs a set of scores, one for each action \
            that can be taken in the game. I trained this network for around 3 hours, and 2000 episodes. Each episode \
            ends when the player loses the game. I also trained this model using epsilon-greedy strategy, where epsilon \
            initially starts at 1, and gradually decreases. This means that my model takes random actions at the start, \
            which allows it to sample a variety of state-action pairs initially. It starts behaving more optimally \
            and less randomly as time goes on, eventually choosing the greedy policy with respect to the Q-values. \
            For this project, I also implemented Double Deep Q-Learning. This is because DQNs are susceptible to \
            maximization bias, which leads them to over estimate the Q-values, and converge slower to an optimal \
            policy. By having a copy of the Deep netwotk, but several episodes behind in training, we can change \
            the update equation of the Q-values to prevent this bias."
          ]
        }
      ]
    },
    // Database project
    {
      title: 'What\'s for Dinner?',
      shortName: 'What\'s for Dinner?',
      path: "/project/db",
      image: 'DB/DB_plan.png',
      content: [
        {
          type: 'Images',
          images: ['DB/guestSearch.png'],
          caption: 'Home screen for What\'s for Dinner?',
          height:1.6,
          smallScreenHeight:1,
        },
        {
          type: 'Text', 
          paragraphs: [
            "What\'s for Dinner? is a web application I built with my friends, which suggests recipes to \
            users based on their available ingredients. My primary goal with this project was to gain \
            experience working with relational databases.",

            "The first step of this project was to obtain a large dataset of recipes. We used the \
            open source Epicurious dataset, which contains over 20,000 recipes, along with nutritional \
            information. However, this dataset did not contain the set of ingredients required. \
            To obtain this information, it had to be inferred from the recipe text. Therefore, open source \
            recipe-parsing ML models were used to get the list of ingredients, as well as quantities of each, \
            for each recipe.",
          ]
        },
        {
          type: 'Images',
          images: ['DB/DB_plan.png'],
          caption: 'Database Relationship Diagram',
          height:2.5,
          smallScreenHeight:1.8,
        },
        {
          type: 'Text', 
          heading: 'Database',
          paragraphs: [
            "The database we used for this project consisted of 8 tables, including a Recipes \
            table, an ingredient to recipe mapping table, a comments table, etc. A complete relationship diagram can \
            be seen above. This project added support for many extra features to enhance user experience. \
            For example, users can choose to log in. Doing so will allow them to access features such as \
            favoriting recipes, adding comments to recipes, viewing their search history, and more. We used \
            a combination of advanced SQL queries, SQL stored procedures, and SQL triggers to implement \
            most of these features."
          ]
        },
        {
          type: 'Images',
          images: ['DB/searchRes.png'],
          caption: 'An example of a search result, where the user searched eggs and butter',
          height:2,
          smallScreenHeight:1.6,
        },
        {
          type: 'Text',
          paragraphs:[
            "When the user searches for a recipe on our webiste, the user has 2 options. Either the user \
            enters a few ingredients, and receieves recipes that use at least all the mentioned ingredients, \
            or the user enters all the ingredients they have, and they recieve recipes that use only a \
            subset of the ingredients. We implemented both of these features, since they both seemed to \
            be useful in different circumstances. Upon searching, a stored procedure runs in our database, \
            which ultimately returns the list of recipes satisfying the user's query. This is then displayed to \
            the user as a table of results. Along with nutritional information, we also display the number of \
            users that have favorited the recipe, as well as whether or not the current user has favorited it.",

            "Once the user clicks on a recipe, they are redirected to a page containing detailed information \
            about the recipe. Since it is not feasible to have a unique page for each recipe, the content \
            of the page is fetched at runtime with another call to the database. On this page, the user can \
            see the complete list of ingredients, as well as the detailed recipe. We also display all comments \
            for the recipe, as well as the option for the user to add their own comment. The option to add \
            a comment appears only when the user is logged in. "
          ]
        },
        {
          type: 'Images',
          images: ['DB/exampleRecipe.png', 'DB/comments.png'],
          caption: 'An example of a recipe screen',
          height:2,
          smallScreenHeight:1.6,
        },
      ]
    },
    {
      title: 'YOLO Bounding Box Predictions',
      shortName: 'YOLO',
      path: "/project/yolo",
      image: 'YOLO/Yolo.png',
      content: [
        {
          type: 'Text', 
          paragraphs: [
            "Bounding box prediction is the task of locating and classifying objects of interests within an image. \
            One of the most influential algorithms for bounding box prediction is You Only Look Once (YOLO). \
            Previous algorithms used for bounding box prediction involved iterating various sized boxes over the image. \
            For each iteration, and the object detection and classification was run within the box. \ This is however very \
            slow, as the network runs many times on the image. YOLO on the other hand requires only 1 pass over the entire image \
            to find bounding boxes.",

            "The way YOLO works is by first dividing the image into an SxS grid. For each grid, b bounding boxes are predicted. \
            For each bounding, 5 parameters are predicted: the width, height, center position (both x and y) within that grid, and confidence. \
            For each grid cell, a set of probabilities is also predicted for the class of object predicted within that grid. \
            This results in a total of S x S x (C + 5b) outputs, where S is the grid size, C is the number of classes, and b is the number \
            of bounding boxes per grid cell. While this limits the number of bounding boxes that can be predicted, the speed up of this model \
            is significantly more than previous methods, while also allowing accurate bounding box predictions."
          ]
        },
        {
          type: 'Images',
          images: ['YOLO/Yolo_grid.png'],
          caption: 'J. Redmon, S. Divvala, R. Girshick, and A. Farhadi, You Only Look Once: Unified, Real-Time Object Detection, CVPR 2016 ',
          height:2.5,
          smallScreenHeight:1.8,
        },
        {
          heading: 'Loss',
          type: 'Text', 
          paragraphs: [
            "The way the model is trained is by a unique loss function. For each box in the ground truth, there is a loss associated \
            with the predicted width and height, center prediction, and the confidence score (the confidence should be 1). For each \
            box that does not contain an object in the ground truth, there is a loss penalizing a high confidence score. Lastly, there \
            is a classification component to the loss as well, for each grid cell that contains an object."
          ]
        },
        {
          type: 'Images',
          images: ['YOLO/YoloLoss.png'],
          caption: 'The loss function in YOLO. The components of the losses are for center regression, width and height of boxes, confidence scores, and classification scores respectively.',
          height:2.5,
          smallScreenHeight:1.8,
        },
        {
          type: 'Text', 
          heading: 'My Implementation',
          paragraphs: [
            "I trained my own YOLO classifier, by implementing the loss function, as well as the convolutional neurla network architecture. \
            I also processed the data in order to ensure that it was in the correct format for training the network. I experimented with variosu hyperparameters \
            and trained the model for a few epochs. For the final output, all boxes which have a confidence score greater than or equal to 0.1 were displayed. \
            This output consists of many overlapping boxes with the same classification."
          ]
        },
        {
          type: 'Images',
          images: ['YOLO/eg1.png', 'YOLO/Eg2.png'],
          caption: 'Prediction of my trained models before Non-max suppression',
          height:2.5,
          smallScreenHeight:1.8,
        },
        {
          type: 'Text', 
          paragraphs: [
            "To fix the issue of multiple overlapping bounding boxes, a technique knows as non-maximal suppression is used. Boxes which have \
            large overlap (based on their Intersection over Union) will be removed, and only the most confident box will be kept. This solves \
            mosts of the problems associated with repeating overlapping boxes for the same object. Using an IoU threshold of 0.3, and confidence \
            threshold of 0.3, this the output of my algorthm on some other images:"
          ]
        },
        {
          type: 'Images',
          images: ['YOLO/eg3.png', 'YOLO/eg4.png', 'YOLO/eg5.png', 'YOLO/eg6.png'],
          caption: 'Prediction of my trained models after Non-maximal suppression',
          height:2.5,
          smallScreenHeight:1.8,
        }
      ]
    }
  ];
  
  export default projectsData;
  
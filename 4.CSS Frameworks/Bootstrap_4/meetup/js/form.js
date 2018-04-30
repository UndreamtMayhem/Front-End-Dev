/**
 * API form handling.
 * Uses ConstraintAPI by default
 * If unavailable uses custom logic as a polyfill
 * Polyfill has not been implemented yet
 */



// Scroll search bar



// - [ ] Miliage
// - [ ] Attend

// needs refactoring
// make different kind of check fields such as password and email

meetupApp.form = {
    constraintAPIEnabled: false,
    expectedSelectValues: ['2 miles', '5 miles', '10 miles', '25 miles', '100 miles'],
    /** This is a private utility function that inserts after a dom node 
    * @param newNode
    * @param referenceNode
    * */
    _insertAfter: function (newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    },
    /** This is a private utility function that checks whether a dom node 
     * has a class
    * @param domElement
    * @param className
    * */
    _hasClass: function (domElement, className) {
        var classExist = false;
        // Get all classnames for the field 
        var classOfParent = domElement.parentElement.className;
        // convert class to array
        var classToCheck = classOfParent.split(" ");
        // iterate over classes to find the one we looking for
        for (var i = 0; i < classToCheck.length; i++) {
            if (classToCheck[i] === className) {
                classExist = true;
                // return instead of break
                break;
            }

        }
        return classExist;
    },
    /** This is a private utility function that removes a class from a parent dom node 
     * has a class
    * @param inputField
    * @param classToRemove
    * 
    */
    _removeClass: function (inputField, classToRemove) {
        // Get all classnames for the field 
        var classOfParent = inputField.parentElement.className;
        // convert class to array
        var classToCheck = classOfParent.split(" ");

        var classesToKeep = [];
        // iterate over classes to find the one we looking for
        classToCheck.forEach(function (klass) {
            if (klass !== classToRemove) {
                classesToKeep.push(klass);
            }
        });

        var updatedClasses = classesToKeep.join(' ');
        inputField.parentElement.className = updatedClasses;
    },
    /* Function that checks if ConstraintAPI is enabled  
     * Changes the flag on the objectto indicate whether to use polyfill or not
     * @param inputField
     * @param field
     * @param messageType
     */
    checkConstraintAPI: function () {
        // need for check
        var basicInput = document.createElement('input');
        if (typeof basicInput.checkValidity !== "undefined") {
            this.constraintAPIEnabled = true;
            console.log("works");
        }
        else {
            console.log("not working");
            //polyfill validation
            this.constraintAPIEnabled = false;
        }

    },
    /* Function that Creates a form help div 
     * Next iteration and the message via the param
     * @param inputField
     * @param field
     * @param messageType
     */
    createFormHelp: function (inputField, field, messageType) {
        var message = " " + messageType;
        // removes has success class if the form had it before
        this._removeClass(inputField, "has-success");

        // check if class does not exist if class does not exist 
        // create a div element with a help message
        if (document.getElementsByClassName(field + "-not-valid").length == 0) {

            inputField.parentElement.className += message;

            var div = document.createElement("div");

            div.className = "form-control-feedback" + " " + field + "-not-valid";

            div.innerText = "Field is required";

            this._insertAfter(div, inputField);
        }
    },
    /* Function that remove a form helper div
    * @param field
    * @param inputField
    * @param classToRemove
    */
    removeFormHelper: function (field, inputField, classToRemove) {

        // Get all classnames for the field 
        var classOfParent = inputField.className;

        // convert class to array
        var classToCheck = classOfParent.split(" ");

        var classesToKeep = [];

        // iterate over classes to find the one we looking for
        classToCheck.forEach(function (klass) {

            if (klass === classToRemove) {

                var helperMessageToRemove = document.getElementsByClassName(field + "-not-valid");

                var helperElement = helperMessageToRemove.item(0);

                helperElement.remove();
            } else {
                classesToKeep.push(klass);
            }
        });


        var updatedClasses = classesToKeep.join(' ');
        inputField.className = updatedClasses;
    },
    /* Function that creates a success Notification by applying the class
     * removes has danger class and removes dom element if it exists
     * @param field
     * @param inputField
     * @param messageType
     */
    createSuccessNotification: function (field, inputField, messageType) {
        // remove old helper dom element if it exists
        this.removeFormHelper(field, inputField.parentElement, "has-danger");

        // check if the input field already has the success class
        var doesSuccessExist = this._hasClass(inputField, 'has-success');

        // if the form doesnt have has-success add it
        if (doesSuccessExist != true) {
            // add success message
            var message = "  " + messageType;
            inputField.parentElement.className += message;
        }
        // else do nothing
        else {
            return;
        }
    },
    /* Function that takes an array of field validity
     * uses every array method to ensure all values are true
     * @param fieldArr
     */
    isFormValid: function (fieldArr) {
        var formValidity = fieldArr.every(function (element) {
            if (element === true) {
                console.log("true");
                return true;
            }
        });
        return formValidity;
    },
    /* Function that will be responsible for sending the data to the server
    * to be implemented
    * @param hobby
    * @param place
    * @param distance
    */
    sendData: function (hobby, place, distance) {
        // post request

    },

    /** This is a  function that checks if constraint api is enabled
     *  it calls submitEvent which sets up the submit button for the search form 
     * Needs refactoring, take out contrainst checking do else where 
    */
    runFormSetup: function () {


        // setup submit event
        this.submitEvent();
        this.selectLocation();
        this.setDistanceBtnLogic();

    },
    /** Function that handles the submit event for main form
     * Deals with checking field and checking select
     * Validates the form
     * and sends the data to the server
     * future iterations will see this take params
     * array of field to check 
    */
    // TODO send data
    submitEvent: function () {
        // Get submit button 
        var submitBtn = document.getElementById("submit");
        var that = this;
        if (submitBtn) {
            // add a click event to it
            submitBtn.addEventListener('click', function (event) {
                // make sure constarint API is on and working
                if (that.constraintAPIEnabled) {
                    // check fields 
                    var isHobbyValidated = meetupApp.form.checkField("hobby");
                    var isPlaceValidated = meetupApp.form.checkField("place");
                    var isDistanceValidated = meetupApp.form.checkSelect("distance", that.expectedSelectValues);
                    var optionValue = document.getElementById("distance").value;

                    // supply to form valid()
                    var checkFormvaluesValidity = [isHobbyValidated.validity, isPlaceValidated.validity, isDistanceValidated.validity]
                    var validatedForm = that.isFormValid(checkFormvaluesValidity);
                    if (validatedForm) {
                        console.log("validated form");
                        // supply values to post
                        //sendData(isHobbyValidated.value, isPlaceValidated.value, isDistanceValidated.value);
                        event.preventDefault();
                    }
                }
                else {
                    event.preventDefault();
                }
            });
        }
    },

    /** This is a  function that gets the location submit button
     * Sets an click event to it which validates the place field
     * if field it valid it closes modal
     * else it fails and user is displayed a warning
    */
    selectLocation: function () {

        var setLocation = document.getElementById("setLocation");
        if (setLocation) {
            // add a click event to it
            setLocation.addEventListener('click', function () {
                // check fields 
                var isValidated = meetupApp.form.checkField("place");
                if (isValidated) {
                    $('#placeModal').modal('toggle');
                }
            });

        }

    },
    /** Function that gets the setDistance button
     * Sets an click event to it which validates the distance given
     * if field is valid it closes modal
     * else it fails and user is displayed a warning
     * TODO the function is way to big
    */
    setDistanceBtnLogic: function () {
        // local helper functions
        // GET BUTTON
        var setDistanceBtn = document.getElementById("setDistance");
        if (setDistanceBtn) {
            var that = this;
            // SET CLICK EVENT
            setDistanceBtn.addEventListener("click", function () {
                // check if empty or defined 
                var expectedValues = ['2 miles', '5 miles', '10 miles', '25 miles', '100 miles'];
                var isSelectValidated = that.checkSelect("distance", expectedValues);
                if (isSelectValidated) {

                    // check existent
                    // remove possible warning 
                    if (document.getElementById("distance").parentElement.children.length > 1) {
                        document.getElementById("distance").parentElement.children[1].remove();
                    }

                    // GET VALUE
                    var optionValue = document.getElementById("distance").value;

                    // GET DOM update its value
                    var distanceFieldText = document.getElementById("distanceField").innerText = optionValue;
                    $('#distanceModal').modal('toggle');
                }
                else {
                    //create helper function 
                    if (document.getElementsByClassName("distance-not-valid").length == 0) {
                        var inputField = document.getElementById("distance");
                        var div = document.createElement("div");
                        div.className = "form-control-feedback is-invalid" + " " + "distance-not-valid";
                        div.innerText = "Field is required";
                        that._insertAfter(div, inputField);
                    }
                }
            });
        }
    },
    /** Function that checks a fields validity
     * Calls Create a form help if errors where found
     * On remove errors if they have been corrected
     * Returns an object with keys as validity and its value
     * if the field is validited
     */
    checkField: function (field) {
        // deal with contrainst being switched off
        // cant rely on checkValidity
        // someone may put dont validate on form
        var fieldInput = document.getElementById(field);

        if (!fieldInput.checkValidity()) {
            // need to add hint
            this.createFormHelp(fieldInput, field, "has-danger");
            return { validity: false };
        }
        else {
            // need to add success hint
            this.createSuccessNotification(field, fieldInput, "has-success");
            return { validity: true, value: fieldInput.value };
        }
    },
    /** Function that checks a select validity
    * Calls Create a form help if errors where found
    * On remove errorsif they have been corrected
    * Returns an object with keys as validity and its value
    * if the field is validited
    */
    checkSelect: function (field, expectedValuesArr) {

        var optionValue = document.getElementById(field).value;
        if (typeof optionValue === "undefined" || optionValue === null) {
            return { validity: false };
        }
        // can assume it is a value
        var valueTrimmed = optionValue.trim();

        if (valueTrimmed === "" || valueTrimmed === " ") {
            return { validity: false };
        }

        // create expected values as an array field
        else {
            for (var i = 0; i < expectedValuesArr.length; i++) {
                if (expectedValuesArr[i] === valueTrimmed) {
                    return { validity: true, value: valueTrimmed };
                }
            }
            return { validity: false };
        }
    },


    /** Function that acts as a facade for the login form
       * runs the login submit event 
    */
    runLoginFormSetup: function () {

        // setup submit event
        this.loginSubmitEvent();

    },
    /** Function that creates loginSubmitEvent
     * checks fields and validates the form
     * then send the data
     * next iteration make check fields an error of field to check
     * then the id of login button
    */
    loginSubmitEvent: function (event) {
        // Get submit button 
        var loginBtn = document.getElementById("login");
        var that = this;
        if (loginBtn) {
            // add a click event to it
            loginBtn.addEventListener('click', function (event) {
                if (that.constraintAPIEnabled) {

                    // check fields 
                    var isemailValidated = meetupApp.form.checkField("emailAddress");
                    var isPasswordValidated = meetupApp.form.checkField("password1");
                    var fieldTocheck = [isemailValidated.validity, isPasswordValidated.validity];

                    that.isFormValid(fieldTocheck);
                    if (that.isFormValid(fieldTocheck)) {
                        console.log("values are validated");
                        // send data
                    }
                }
                else {
                    event.preventDefault();
                }
            });
        }
    },
};


//inside a script tag
meetupApp.form.checkConstraintAPI();
meetupApp.form.runFormSetup();
meetupApp.form.runLoginFormSetup();


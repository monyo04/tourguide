// Create a pop-up ad for social media links
window.onload = function() {
    // Create the pop-up container
    const popup = document.createElement('div');
    popup.id = 'socialPopup';
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.width = '300px';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.borderRadius = '8px';
    popup.style.padding = '20px';
    popup.style.textAlign = 'center';
    popup.style.zIndex = '1000';

    // Add content to the pop-up
    popup.innerHTML = `
        <h3>Follow Us!</h3>
        <p>Stay connected with your tour guide on social media:</p>
        <div style="display: flex; justify-content: space-around; margin-top: 10px;">
            <a href="https://www.facebook.com/itsmonyo_" target="_blank" title="Facebook">
                <img src="facebook-icon.png" alt="Facebook" style="width: 40px;">
            </a>
            <a href="https://www.instagram.com/i_monayo" target="_blank" title="Instagram">
                <img src="instagram-icon.png" alt="Instagram" style="width: 40px;">
            </a>
            <a href="https://www.tiktok.com/@itsmonyo_" target="_blank" title="TikTok">
                <img src="tiktok-icon.png" alt="TikTok" style="width: 40px;">
            </a>
            <a href="https://wa.me/+255756046033" target="_blank" title="WhatsApp">
                <img src="whatsapp-icon.png" alt="WhatsApp" style="width: 40px;">
            </a>
        </div>
        <button id="closePopup" style="margin-top: 10px; padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;

    // Append the pop-up to the body
    document.body.appendChild(popup);

    // Add functionality to close the pop-up
    const closeBtn = document.getElementById('closePopup');
    closeBtn.addEventListener('click', function() {
        popup.innerHTML = `<button id='showPopup' style='padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;'>Social Media</button>`;

        const showBtn = document.getElementById('showPopup');
        showBtn.addEventListener('click', function() {
            popup.innerHTML = `
                <h3>Follow Us!</h3>
                <p>Stay connected with your tour guide on social media:</p>
                <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                    <a href="https://www.facebook.com/yourguide" target="_blank" title="Facebook">
                        <img src="facebook-icon.png" alt="Facebook" style="width: 40px;">
                    </a>
                    <a href="https://www.instagram.com/yourguide" target="_blank" title="Instagram">
                        <img src="instagram-icon.png" alt="Instagram" style="width: 40px;">
                    </a>
                    <a href="https://www.tiktok.com/@yourguide" target="_blank" title="TikTok">
                        <img src="tiktok-icon.png" alt="TikTok" style="width: 40px;">
                    </a>
                    <a href="https://wa.me/+25556046033" target="_blank" title="WhatsApp">
                        <img src="whatsapp-icon.png" alt="WhatsApp" style="width: 40px;">
                    </a>
                </div>
                <button id="closePopup" style="margin-top: 10px; padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
            `;

            const closeBtn = document.getElementById('closePopup');
            closeBtn.addEventListener('click', function() {
                popup.innerHTML = `<button id='showPopup' style='padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;'>Social Media</button>`;
            });
        });
    });
};

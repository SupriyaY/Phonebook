require_relative './contact_data.rb'
require_relative './user_data.rb'

Contact.destroy_all
User.destroy_all

contact_data = get_contact_data
user_data = get_user_data

contact_data.each_pair do |user_first_name, contacts|
  info = user_data[user_first_name]
  current_user = User.create!({
                                      first_name:   info[:first_name],
                                      last_name:    info[:last_name],
                                      photo_url:    info[:photo_url]
                                  })

  contacts.each do |contact|
    Contact.create!({
                     first_name:  contact[:first_name],
                     last_name:   contact[:last_name],
                     cell_number:  contact[:cell_number],
                     work_number:  contact[:work_number],
                     home_number:  contact[:home_number], 
                     user:        current_user
                 })
  end
end

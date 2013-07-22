require 'sinatra'
require 'json'

module App
   class MyApp < Sinatra::Base  

set :root, File.expand_path(File.dirname(__FILE__) + '/../')

#before filter
 before '/*' do
   puts "#{request.ip} to #{request.path}"
 end

post '/random' do
  content_type :json
  r = Random.new
  rand_val = r.rand(0..1000)
 {"number" => rand_val}.to_json
end

get "/" do
	403
end

get '/:name' do |n|
	if n.to_i%2==0
		403
	else
		 haml :index
	end
end



error 403 do
  haml :error_403
end

end
end
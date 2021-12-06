using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Penny_Earned_App.Data;
using Penny_Earned_App.Models;
using Autofac;
using Autofac.Extensions.DependencyInjection;

namespace Penny_Earned_App
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public ILifetimeScope AutofacContainer { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<APIDBContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));

            services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<APIDBContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, APIDBContext>();

            services.AddAuthentication()
                .AddIdentityServerJwt();

            services.AddControllersWithViews();
            services.AddRazorPages();

            // Add services to the collection. Don't build or return any IServiceProvider or the ConfigureContainer method
            // won't get called. Don't create a ContainerBuilder for Autofac here, and don't call builder.Populate() - that
            // happens in the AutofacServiceProviderFactory for you.
            services.AddOptions();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            // Register the Swagger Generator service. This service is responsible for genrating Swagger Documents.
            // Note: Add this service at the end after AddMvc() or AddMvcCore().
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Penny Earned API",
                    Version = "v1",
                    Description = "The Penny Earned application hopes to help its users to plan out their savings and aim for " +
                    "those nice extras in life. The app will allow users to create savings goals, add savings to their goals and work " +
                    "towards achieving them. Users will be provided easy to see progress towards their goals and work with others to achieve " +
                    "shared goals."

                });
            });
        }

        // ConfigureContainer is where you can register things directly with Autofac. This runs after ConfigureServices so the things
        // here will override registrations made in ConfigureServices. Don't build the container; that gets done for you by the factory.
        public void ConfigureContainer(ContainerBuilder builder)
        {
            // Register your own things directly with Autofac here. Don't
            // call builder.Populate(), that happens in AutofacServiceProviderFactory
            // for you.
            //builder.RegisterModule(new MyApplicationModule());
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //// Enable middleware to serve generated Swagger as a JSON endpoint.
            //app.UseSwagger();

            //// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            //// specifying the Swagger JSON endpoint.
            //app.UseSwaggerUI(c =>
            //{
            //    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Penny Earned API V1");

            //    // To serve SwaggerUI at application's root page, set the RoutePrefix property to an empty string.
            //    c.RoutePrefix = string.Empty;
            //});

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
                }
            });

            // If, for some reason, you need a reference to the built container, you
            // can use the convenience extension method GetAutofacRoot.
            this.AutofacContainer = app.ApplicationServices.GetAutofacRoot();

           
        }
    }
}
